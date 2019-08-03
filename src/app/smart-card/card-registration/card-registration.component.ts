import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { SmartCard, Guardian } from '../../../models/smart-card';
import { SmartCardService } from '../smart-card.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-card-registration',
  templateUrl: './card-registration.component.html',
  styleUrls: ['./card-registration.component.scss']
})
export class CardRegistrationComponent implements OnInit {
  cardRegistrationForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private service: SmartCardService, private router: Router, 
    private route: ActivatedRoute, private notify: NotificationService) { }

  ngOnInit() {
    this.declareCardRegistrationForm();
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      if (params.get('id'))
        this.service.GetSmartCard(params.get('id')).subscribe(c => {
          console.log(c);
          this.loadFormData(c);
        });
    });
  }

  declareCardRegistrationForm() {
    this.cardRegistrationForm = this.formBuilder.group({
      SmartcardNumber: ['', Validators.required],
      ID: ['0'],
      Name: [''],
      Surname: [''],
      Gender: ['Male'],
      CellPhone: [''],
      EMail: ['', Validators.email],
      CardType: [''],
      Number: [''],
      Guardians: this.formBuilder.array([this.addGuardianGroup()])
    });
  }

  addGuardianGroup() {
    return this.formBuilder.group({
      Name: [''],
      Surname: [''],
      RelationShip: [''],
      CellPhone: [''],
      TelePhone: [''],
      EMail: ['', Validators.email]
    });
  }

  addGuardian() {
    this.guardianArray.push(this.addGuardianGroup());
  }

  loadFormData(c: SmartCard) {
    this.patchGuardians(c.Guardians);
    this.cardRegistrationForm.patchValue(c);
  }

  patchGuardians(guardians: Guardian[]) {
    let control = this.cardRegistrationForm.get('Guardians') as FormArray;
    // Following is also correct
    // let control = <FormArray>this.form.controls['resultList'];
    if (guardians && guardians.length > 0 && control.length > 0)
      control.removeAt(0);

    guardians.forEach(x => {
      control.push(this.formBuilder.group({
        Name: x.Name,
        Surname: x.Surname,
        RelationShip: x.RelationShip,
        CellPhone: x.CellPhone,
        TelePhone: x.TelePhone,
        EMail: x.EMail
      }));
    });
  }

  removeGuardian(i) {
    if (this.guardianArray.length > 1)
      this.guardianArray.removeAt(i);
  }

  get guardianArray(): FormArray {
    return (<FormArray>this.cardRegistrationForm.get("Guardians"));
  }

  get f() { return this.cardRegistrationForm['controls']; }

  setRadioButton(control: AbstractControl, compareValue: string, defaultValue: string): any {
    var controlValue ="";
    if(!control.value) controlValue = defaultValue;
    else controlValue = control.value;

    return controlValue.toLowerCase() === compareValue.toLowerCase() ? ['btn-success', 'focus', 'active'] : "btn-primary";
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.cardRegistrationForm.invalid) {
      return;
    }
    let smartCard = <SmartCard>this.cardRegistrationForm.value;
    smartCard.Status = true;
    if (this.cardRegistrationForm.controls.Guardians.pristine)
      smartCard.Guardians.pop();

    this.service.InsertOrUpdateSmartCard(smartCard).subscribe(data => {
      if (data == "") {
        this.notify.showSuccess("Smartcard registered successfull!!","");
        this.router.navigate(["/smartcard/list"]);
      }
      else {  this.notify.showError(data,""); }
    });
  }
}
