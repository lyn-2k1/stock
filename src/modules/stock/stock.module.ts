import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { StockRepository } from './stock.resolver';
import { Stock, StockSchema } from './entities/stock.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }])],
  controllers: [StockController],
  providers: [StockService, StockRepository]
})
export class StockModule {}
