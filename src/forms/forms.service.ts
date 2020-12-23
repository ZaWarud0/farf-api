import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Form } from './forms.model';

@Injectable()
export class FormsService {

    constructor(@InjectModel('Form') private readonly formModel: Model<Form>) { }

    async getForms() {
        return await this.formModel.find().exec();
    }

    async getLatestReqNo() {
        return { reqNo: (await this.formModel.findOne({}, {}, { sort: { 'date' : -1 } }).exec()).reqNo };
    }

    async addForm(form: Form) {
        const newForm = new this.formModel({
            date: new Date(),
            division: form.division,
            remarks: form.remarks,
            reqNo: form.reqNo,
            data: form.data,
            preparedBy: form.preparedBy,
            approvedBy: form.approvedBy
        })
        const result = await newForm.save();
        return { id: result.id };
    }
}
