import { Body, Controller, Get, Post } from '@nestjs/common';
import { createHolidayDto } from './dto/create-holiday.dto';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {
  constructor(private holidaysService: HolidaysService) {}

  @Get()
  getAllHolidays() {
    return this.holidaysService.getAllHolidays();
  }

  @Post()
  createHoliday(@Body() createHolidayDto: createHolidayDto) {
    const { name, date } = createHolidayDto;
    return this.holidaysService.createHoliday(name, date);
  }
}
