import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {
  constructor(private holidaysService: HolidaysService) {}

  @Get()
  getAllHolidays() {
    return this.holidaysService.getAllHolidays();
  }

  @Post()
  createHoliday(@Body() createHolidayDto: CreateHolidayDto) {
    return this.holidaysService.createHoliday(createHolidayDto);
  }

  @Get('/:id')
  getHolidayById(@Param('id') id: string) {
    return this.holidaysService.getHolidayById(id);
  }

  @Delete('/:id')
  deleteHoliday(@Param('id') id: string) {
    this.holidaysService.deleteHoliday(id);
  }
}
