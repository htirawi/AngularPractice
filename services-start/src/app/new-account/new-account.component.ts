import {Component} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

// import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private logging: LoggingService, private accounts: AccountsService) {

    this.accounts.statusUpdated.subscribe((status: string) => alert('new status created ' + status));

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    this.accounts.addAccount(accountName, accountStatus);
    // this.logging.loggingStatusChange(accountStatus);

    // WRONG
    // const service = new LoggingService();
    // service.loggingStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + service);

  }
}
