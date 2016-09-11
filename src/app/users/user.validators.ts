import {AbstractControl} from '@angular/forms';

export class UserValidators{
    static validEmail(control: AbstractControl){
        let email = control.value;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            return null;
        }
        return {validEmail: true};
    }
}