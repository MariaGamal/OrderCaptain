cube(`User`, {
  sql: `SELECT * FROM public.user`,
  
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
      drillMembers: [id, username, createdAt, created, lastUpdated]
    }
  },
  
  dimensions: {
    isActive: {
      sql: `is_active`,
      type: `string`
    },
    
    isAllTenantsUser: {
      sql: `is_all_tenants_user`,
      type: `string`
    },
    
    isSuperuser: {
      sql: `is_superuser`,
      type: `string`
    },
    
    avatar: {
      sql: `avatar`,
      type: `string`
    },
    
    receivepickuporders: {
      sql: `${CUBE}."receivePickupOrders"`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    intro: {
      sql: `intro`,
      type: `string`
    },
    
    receivedeliveryorders: {
      sql: `${CUBE}."receiveDeliveryOrders"`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    created: {
      sql: `created`,
      type: `time`
    },
    
    lastUpdated: {
      sql: `last_updated`,
      type: `time`
    },
    
    lastLogin: {
      sql: `last_login`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
