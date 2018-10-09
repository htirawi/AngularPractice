export class LoggingService {
  loggingStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
