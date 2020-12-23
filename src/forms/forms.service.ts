import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Form } from './forms.model';

@Injectable()
export class FormsService {

    // Receiving the injected forms model when service initiated
    constructor(@InjectModel('Form') private readonly formModel: Model<Form>) { }
    
     /**
     * Returns all forms from db
     * @returns an array of Forms
     */
    async getForms() {
        return await this.formModel.find().exec();
    }

    /**
     * Returns the requistion no of the lastest form (sorted by date)
     * @returns an object with key reqNo
     */
    async getLatestReqNo() {
        return { reqNo: (await this.formModel.findOne({}, {}, { sort: { 'date' : -1 } }).exec()).reqNo };
    }

    /**
     * Adds form to db
     * @param form - The form to add
     * @returns an object of the Id of the added form
     */
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
