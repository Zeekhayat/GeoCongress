/*
 * File: app/view/bill/Show.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.view.bill.Show', {
    extend: 'Ext.Container',

    config: {
        id: 'billSummary',
        scrollable: 'vertical',
        tpl: [
            '{summary}'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'billSummaryToolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'billSummaryBackButton',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            }
        ]
    }

});