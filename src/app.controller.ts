import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
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
}
