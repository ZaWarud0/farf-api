import { Controller, Get, Post, Body } from '@nestjs/common';
import { Form } from './forms.model';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
    constructor(private readonly formsService: FormsService) { }

    @Get()
    async getForms() {
        return await this.formsService.getForms();
    }

    @Get('latest')
    async getLatestReqNO() {
        return await this.formsService.getLatestReqNo();
    }

    @Post()
    async addForm(@Body('form') form: Form) {
        return await this.formsService.addForm(form);
    }
}