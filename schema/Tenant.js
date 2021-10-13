cube(`Tenant`, {
  sql: `SELECT * FROM public.tenant`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, fbpageid, created, lastUpdated]
    }
  },
  
  dimensions: {
    menuurl: {
      sql: `${CUBE}."menuURL"`,
      type: `string`
    },
    
    fbpageaccesstoken: {
      sql: `${CUBE}."FBPageAccessToken"`,
      type: `string`
    },
    
    homedelivery: {
      sql: `${CUBE}."homeDelivery"`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    isactive: {
      sql: `${CUBE}."isActive"`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    currentcy: {
      sql: `currentcy`,
      type: `string`
    },
    
    fbpageid: {
      sql: `${CUBE}."FBPageID"`,
      type: `string`
    },
    
    open247: {
      sql: `open247`,
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
