import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import axios from 'axios';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get()
  async findAll() {
    console.log("all")
    return "aslkjhnjhb"
    // const res = await this.stockService.getAll();
    // if(res) {
    //   const data = await axios.get('https://bgapidatafeed.vps.com.vn/getlistpt')
    //   .then(async (res) => {
    //     console.log("res data", res)
    //     // await this.update()
    //     return await this.stockService.getAll()
    //   })
    // }
    // return this.stockService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.stockService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
