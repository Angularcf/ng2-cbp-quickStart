import './lib';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule }                      from '@angular/forms';
import { HttpModule }                       from '@angular/http';

import {
    DropdownTreeFieldComponent,
    DropdownTreeItemComponent
}                                           from './dropdown-tree-field';
import { HeaderComponent }                  from './header';
import { RadioButtonComponent }             from './radio-button';
import { RadioGroupComponent }              from './radio-group';
import { UniqueSelectionDispatcher }        from './shared';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        DropdownTreeFieldComponent,
        DropdownTreeItemComponent,
        HeaderComponent,
        RadioButtonComponent,
        RadioGroupComponent
    ],
    exports: [
        DropdownTreeFieldComponent,
        DropdownTreeItemComponent,
        HeaderComponent,
        RadioButtonComponent,
        RadioGroupComponent
    ],
    providers: [
        UniqueSelectionDispatcher
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CommonFrameworkModule {
}
