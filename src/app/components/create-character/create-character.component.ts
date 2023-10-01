import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../characters.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ]
  swService: CharactersService;
  defaultName = 'Obi-Wan';

  constructor(swService: CharactersService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
