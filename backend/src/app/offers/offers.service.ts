import { Injectable } from '@nestjs/common';

@Injectable()
export class OffersService {
  getOffers() {
    return 'return all offers';
  }
}
