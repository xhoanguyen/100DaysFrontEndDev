import { Coach } from "./Coach";

export class GolfCoach implements Coach {
  getDailyWorkOut(): string {
    return "Hit the course for 1 hours.";
  }
}
