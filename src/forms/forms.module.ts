import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FormsController } from './forms.controller';
import { FormsSchema } from './forms.model';
import { FormsService } from './forms.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Form', schema: FormsSchema}])],
    controllers: [FormsController],
    providers: [FormsService]
})
export class  FormsModule { }
