import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockModule } from './modules/stock/stock.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/stock', {
      autoIndex: true,
      useNewUrlParser: true,
    }),
     StockModule
  ],
})
export class AppModule {}
