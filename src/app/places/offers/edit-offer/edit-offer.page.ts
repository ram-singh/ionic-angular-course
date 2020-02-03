import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Place } from '../../place.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss']
})
export class EditOfferPage implements OnInit, OnDestroy {
  editOfferForm: FormGroup;
  place: Place;
  placeId: string;
  isLoading = false;
  private placeSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeId = paramMap.get('placeId');
      this.isLoading = true;
      this.placeSub = this.placesService
        .getPlace(paramMap.get('placeId'))
        .subscribe(place => {
          this.place = place;
          this.fillEditOfferForm();
          this.isLoading = false;
        }, error => {
          this.alertCtrl.create({
            header: 'An Error occured!',
            message: 'Place could not be fetched. Please try again later.',
            buttons: [{
              text: 'Okay',
              handler: () => {
                this.router.navigate(['/places/tabs/offers']);
              }
            }]
          }).then( alertEl => {
            alertEl.present();
          });
        });
    });
  }

  fillEditOfferForm() {
    this.editOfferForm = new FormGroup({
      title: new FormControl(this.place.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(this.place.description, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      })
    });
  }

  onUpdateOffer() {
    if (!this.editOfferForm.valid) {
      return;
    }
    this.loadingCtrl.create({message: 'updating places..'}).then(loadingEl => {
      loadingEl.present();
      this.placesService
      .updatePlace(
        this.place.id,
        this.editOfferForm.value.title,
        this.editOfferForm.value.description
      )
      .subscribe(() => {
        loadingEl.dismiss();
        this.editOfferForm.reset();
        this.router.navigate(['/places/tabs/offers']);
      });
    });
    console.log('on update offer:', this.editOfferForm);
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
}
