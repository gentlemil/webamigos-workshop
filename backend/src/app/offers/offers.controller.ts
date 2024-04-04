import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { OffersService } from './offers.service';

@Controller('offers') // localhost:3000/api/offers
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  async getOffers() {
    const offers = await this.offersService.getOffers();

    if (!offers) {
      throw new HttpException('Offers not found', HttpStatus.NOT_FOUND);
    }

    return { offers };
  }

  @Get(':id') // localhost:3000/api/offers/1
  async getOfferDetails(@Param('id') id: string) {
    const offer = await this.offersService.getOfferById(id);

    if (!offer) {
      throw new HttpException('Offer not found', HttpStatus.NOT_FOUND);
    }
    return { offer };
  }
}
