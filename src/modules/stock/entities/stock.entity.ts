import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
var aggregatePaginate = require('mongoose-aggregate-paginate-v2');

@Schema()

export class Stock {
    @Prop()
    stockCode: string;
  
    @Prop()
    data: string;
  
}

export type StockDocument = Stock & Document;
export const StockSchema = SchemaFactory.createForClass(Stock);
StockSchema.plugin(paginate);
StockSchema.plugin(require('mongoose-autopopulate'));
StockSchema.plugin(aggregatePaginate);








