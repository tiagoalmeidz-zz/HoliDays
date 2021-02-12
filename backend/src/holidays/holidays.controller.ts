import { Body, Controller, Get, Post } from '@nestjs/common';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {
  constructor(private holidaysService: HolidaysService) {}

  @Get()
  getAllHolidays() {
    return this.holidaysService.getAllHolidays();
  }

  @Post()
  createHoliday(@Body('name') name: string, @Body('date') date: Date) {
    return this.holidaysService.createHoliday(name, date);
  }
}
