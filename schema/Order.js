cube(`Order`, {
  sql: `SELECT * FROM public.order`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Tenant: {
      sql: `${CUBE}.tenant_id = ${Tenant}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customername, ispaid, id, created, lastUpdated]
    },
    
    subtotalafterdiscount: {
      sql: `${CUBE}."subtotalAfterDiscount"`,
      type: `sum`
    },
    
    total: {
      sql: `total`,
      type: `sum`
    },
    
    ordernumber: {
      sql: `${CUBE}."orderNumber"`,
      type: `sum`
    },
    
    discountamount: {
      sql: `discountamount`,
      type: `sum`
    },
    
    subtotal: {
      sql: `subtotal`,
      type: `sum`
    },
    
    taxamount: {
      sql: `${CUBE}."taxAmount"`,
      type: `sum`
    }
  },
  
  dimensions: {
    rejectioncomment: {
      sql: `${CUBE}."rejectionComment"`,
      type: `string`
    },
    
    customername: {
      sql: `${CUBE}."customerName"`,
      type: `string`
    },
    
    phonenumber: {
      sql: `${CUBE}."phoneNumber"`,
      type: `string`
    },
    
    cancellationcomment: {
      sql: `${CUBE}."cancellationComment"`,
      type: `string`
    },
    
    deliverytype: {
      sql: `${CUBE}."deliveryType"`,
      type: `string`
    },
    
    deliverypersonphonenumber: {
      sql: `${CUBE}."deliveryPersonPhoneNumber"`,
      type: `string`
    },
    
    beenaaddresslabel: {
      sql: `beenaaddresslabel`,
      type: `string`
    },
    
    ispaid: {
      sql: `${CUBE}."isPaid"`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    notes: {
      sql: `notes`,
      type: `string`
    },
    
    addresslocation: {
      sql: `${CUBE}."addressLocation"`,
      type: `string`
    },
    
    addressdescription: {
      sql: `${CUBE}."addressDescription"`,
      type: `string`
    },
    
    created: {
      sql: `created`,
      type: `time`
    },
    
    lastUpdated: {
      sql: `last_updated`,
      type: `time`
    },
    
    timeenteredstatus8: {
      sql: `${CUBE}."timeEnteredStatus_8"`,
      type: `time`,
      title: `Timeenteredstatus 8`
    },
    
    timeenteredstatus3: {
      sql: `${CUBE}."timeEnteredStatus_3"`,
      type: `time`,
      title: `Timeenteredstatus 3`
    },
    
    timeenteredstatus1: {
      sql: `${CUBE}."timeEnteredStatus_1"`,
      type: `time`,
      title: `Timeenteredstatus 1`
    },
    
    timeenteredstatus2: {
      sql: `${CUBE}."timeEnteredStatus_2"`,
      type: `time`,
      title: `Timeenteredstatus 2`
    },
    
    timeenteredstatus5: {
      sql: `${CUBE}."timeEnteredStatus_5"`,
      type: `time`,
      title: `Timeenteredstatus 5`
    },
    
    timeenteredstatus6: {
      sql: `${CUBE}."timeEnteredStatus_6"`,
      type: `time`,
      title: `Timeenteredstatus 6`
    },
    
    timeenteredstatus4: {
      sql: `${CUBE}."timeEnteredStatus_4"`,
      type: `time`,
      title: `Timeenteredstatus 4`
    },
    
    timeenteredstatus7: {
      sql: `${CUBE}."timeEnteredStatus_7"`,
      type: `time`,
      title: `Timeenteredstatus 7`
    }
  },
  
  dataSource: `default`
});
