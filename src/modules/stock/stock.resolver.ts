import { OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/mongoose';
import { Stock, StockDocument } from './entities/stock.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StockRepository
  extends BaseRepository<StockDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Stock.name) model: Model<StockDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}