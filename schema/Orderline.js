cube(`Orderline`, {
  sql: `SELECT * FROM public.orderline`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Tenant: {
      sql: `${CUBE}.tenant_id = ${Tenant}.id`,
      relationship: `belongsTo`
    },
    
    Order: {
      sql: `${CUBE}.order_id = ${Order}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id, created, lastUpdated]
    },
    
    finalprice: {
      sql: `${CUBE}."finalPrice"`,
      type: `sum`
    },
    
    price: {
      sql: `price`,
      type: `sum`
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    },
    
    totallineprice: {
      sql: `${CUBE}."totalLinePrice"`,
      type: `sum`
    },
    
    discountamount: {
      sql: `${CUBE}."discountAmount"`,
      type: `sum`
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
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
    
    offerchoices: {
      sql: `${CUBE}."offerChoices"`,
      type: `string`
    },
    
    created: {
      sql: `created`,
      type: `time`
    },
    
    lastUpdated: {
      sql: `last_updated`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
