import { Controller, Get, Post, Body } from '@nestjs/common';
import { Form } from './forms.model';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {

    // Receive the injected FormsService
    constructor(private readonly formsService: FormsService) { }

    /**
     * Returns all forms
     * Method: GET
     * Route: forms/
     * @returns an array of forms
     */
    @Get()
    async getForms() {
        return await this.formsService.getForms();
    }

    /**
     * Returns the latest requision no
     * Method: GET
     * Route: forms/latest
     * @returns an object with key reqNo
     */
    @Get('latest')
    async getLatestReqNO() {
        return await this.formsService.getLatestReqNo();
    }

    /**
     * Adds form to db
     * Method: POST
     * Route: forms/
     * @returns an object with the id of the added form
     */
    @Post()
    async addForm(@Body('form') form: Form) {
        return await this.formsService.addForm(form);
    }
}