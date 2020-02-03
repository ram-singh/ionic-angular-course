import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @ViewChild('filePicker', {static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string | File>();
  @Input() showPreview = false;
  usePicker = false;
  selectedImage: string;
  isLoading = false;
  constructor(private platform: Platform) { }

  ngOnInit() {
    console.log(this.platform.is('hybrid'));
    // for Desktop
    if ((this.platform.is('mobile') && !this.platform.is('hybrid'))  || this.platform.is('desktop')) {
      this.usePicker = true;
    }
  }
  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) { return; }
    const fr = new FileReader();
    this.isLoading = true;
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl;
      this.isLoading = false;
      this.imagePick.emit(pickedFile);
    };
    fr.readAsDataURL(pickedFile);
  }
  onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera') ) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.Base64
    }).then(image => {
      this.selectedImage = image.base64String;
      this.imagePick.emit(image.base64String);
    }).catch( err => {
      console.log(err);
      if (this.usePicker) {
        this.filePickerRef.nativeElement.click();
        return false;
      }
    });
  }

}
