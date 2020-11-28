import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  isWaitSending = false;
  userName = {
    value: '',
    isValid: null,
    checker() {
      this.isValid = this.value.trim() !== '';
    }
  };
  userEmail = {
    // tslint:disable-next-line:max-line-length
    emailPattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    value: '',
    isValid: null,
    checker() {
      this.isValid = this.emailPattern.test(this.value);
    }
  };
  userPhone = {
    phonePattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    value: '',
    isValid: null,
    checker() {
      this.isValid = this.phonePattern.test(this.value);
    }
  };
  userCity = {
    value: '',
    isValid: null,
    checker() {
      this.isValid = this.value.trim() !== '';
    }
  };
  userMessage = {
    value: '',
    isValid: null,
    checker() {
      this.isValid = this.value.trim() !== '';
    }
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  sendBackMessage() {
    if (this.userName.isValid == null) { this.userName.isValid = false; }
    if (this.userEmail.isValid == null) { this.userEmail.isValid = false; }
    if (this.userPhone.isValid == null) { this.userPhone.isValid = false; }
    if (this.userCity.isValid == null) { this.userCity.isValid = false; }
    if (this.userMessage.isValid == null) { this.userMessage.isValid = false; }

    if (this.userName.isValid &&
      this.userEmail.isValid &&
      this.userPhone.isValid &&
      this.userCity.isValid &&
      this.userMessage.isValid &&
      !this.isWaitSending
    ) {
      this.isWaitSending = true;

      const callBackData = {
        userName: this.userName.value,
        userEmail: this.userEmail.value,
        userPhone: this.userPhone.value,
        userCity: this.userCity.value,
        userMessage: this.userMessage.value
      };

      this.httpClient.post<{result: boolean}>('../sendBackMessage.php', callBackData).subscribe(response => {
        this.isWaitSending = false;
        if (response.result) {
          this.userName.value = '';
          this.userEmail.value = '';
          this.userPhone.value = '';
          this.userCity.value = '';
          this.userMessage.value = '';
          // @ts-ignore
          jQuery.fancybox.open('<div><h5>Сообщение успешно отправлено!</h5><p>Мы ответим вам в ближайшее время</p></div>');
          this.userName.isValid = null;
          this.userEmail.isValid = null;
          this.userPhone.isValid = null;
          this.userCity.isValid = null;
          this.userMessage.isValid = null;

        } else {
          // @ts-ignore
          jQuery.fancybox.open('<div><h5>Сообщение не отправлено</h5><p>Повторите попытку еще раз</p></div>');
        }
      });
    }
  }
}
