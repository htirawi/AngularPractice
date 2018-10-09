import {Component, Input} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private logging: LoggingService, private accounts: AccountsService) {
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accounts.updateStatus(this.id, status);
    // this.logging.loggingStatusChange(status);

    this.accounts.statusUpdated.emit(status);
  }
}