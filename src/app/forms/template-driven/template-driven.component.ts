import {Component, computed, signal} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Textarea} from 'primeng/textarea';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, InputText, Textarea, Button],
  template: `
    <form #form=ngForm (ngSubmit)="onSubmit(form)" class="flex flex-col gap-2">
      <div class="flex flex-col">
        <label for="name">Project name</label>
        <input
          pInputText
          id="name"
          name="name"
          aria-describedby="name-help"
          #nameRef=ngModel
          [(ngModel)]="this.projectForm().name"
          required/>
      </div>
      <div class="flex flex-col">
        <label for="description">Description</label>
        <textarea
          pTextarea
          id="description"
          name="description"
          [(ngModel)]="this.projectForm().description"
          [maxLength]="maxLength"
          #descriptionRef=ngModel
          style="resize: none">
        </textarea>
        <small>
          Caractères restants : {{ maxLength - descriptionRef.value?.length }}
        </small>
      </div>


      <div>
        <p-button
          label="Create project"
          type="submit" [disabled]="form.invalid"/>
      </div>

    </form>
  `,
  styles: ``
})
export class TemplateDrivenComponent {
  public maxLength: number = 250;

  //signal powered NgModel type form
  public formFields = {
    name: signal(""),
    description: signal(""),
  }

  public projectForm = computed(() => {
    return ({
      name: this.formFields.name,
      description: this.formFields.description
    })
  })

  public onSubmit(form: NgForm) {
    console.log('Form submitted :', form.value);
  }
}
