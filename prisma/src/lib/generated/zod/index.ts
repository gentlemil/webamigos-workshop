import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const CompanyScalarFieldEnumSchema = z.enum(['id','name','description']);

export const JobOfferScalarFieldEnumSchema = z.enum(['id','title','description','location','salary_from','salary_to','is_active','salary_currency','created_at','updated_at','companyId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const CurrencySchema = z.enum(['EUR','USD','GBP']);

export type CurrencyType = `${z.infer<typeof CurrencySchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
})

export type Company = z.infer<typeof CompanySchema>

/////////////////////////////////////////
// JOB OFFER SCHEMA
/////////////////////////////////////////

export const JobOfferSchema = z.object({
  salary_currency: CurrencySchema,
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  location: z.string().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  companyId: z.string().nullable(),
})

export type JobOffer = z.infer<typeof JobOfferSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// COMPANY
//------------------------------------------------------

export const CompanyIncludeSchema: z.ZodType<Prisma.CompanyInclude> = z.object({
  job_offers: z.union([z.boolean(),z.lazy(() => JobOfferFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompanyArgsSchema: z.ZodType<Prisma.CompanyDefaultArgs> = z.object({
  select: z.lazy(() => CompanySelectSchema).optional(),
  include: z.lazy(() => CompanyIncludeSchema).optional(),
}).strict();

export const CompanyCountOutputTypeArgsSchema: z.ZodType<Prisma.CompanyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CompanyCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CompanyCountOutputTypeSelectSchema: z.ZodType<Prisma.CompanyCountOutputTypeSelect> = z.object({
  job_offers: z.boolean().optional(),
}).strict();

export const CompanySelectSchema: z.ZodType<Prisma.CompanySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  job_offers: z.union([z.boolean(),z.lazy(() => JobOfferFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
}).strict()

// JOB OFFER
//------------------------------------------------------

export const JobOfferIncludeSchema: z.ZodType<Prisma.JobOfferInclude> = z.object({
  Company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

export const JobOfferArgsSchema: z.ZodType<Prisma.JobOfferDefaultArgs> = z.object({
  select: z.lazy(() => JobOfferSelectSchema).optional(),
  include: z.lazy(() => JobOfferIncludeSchema).optional(),
}).strict();

export const JobOfferSelectSchema: z.ZodType<Prisma.JobOfferSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  salary_from: z.boolean().optional(),
  salary_to: z.boolean().optional(),
  is_active: z.boolean().optional(),
  salary_currency: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  companyId: z.boolean().optional(),
  Company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const CompanyWhereInputSchema: z.ZodType<Prisma.CompanyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  job_offers: z.lazy(() => JobOfferListRelationFilterSchema).optional()
}).strict();

export const CompanyOrderByWithRelationInputSchema: z.ZodType<Prisma.CompanyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  job_offers: z.lazy(() => JobOfferOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CompanyWhereUniqueInputSchema: z.ZodType<Prisma.CompanyWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  job_offers: z.lazy(() => JobOfferListRelationFilterSchema).optional()
}).strict());

export const CompanyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompanyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompanyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompanyMinOrderByAggregateInputSchema).optional()
}).strict();

export const CompanyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompanyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const JobOfferWhereInputSchema: z.ZodType<Prisma.JobOfferWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobOfferWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salary_from: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  salary_to: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  is_active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  salary_currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Company: z.union([ z.lazy(() => CompanyNullableRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional().nullable(),
}).strict();

export const JobOfferOrderByWithRelationInputSchema: z.ZodType<Prisma.JobOfferOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional()
}).strict();

export const JobOfferWhereUniqueInputSchema: z.ZodType<Prisma.JobOfferWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobOfferWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salary_from: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  salary_to: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  is_active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  salary_currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Company: z.union([ z.lazy(() => CompanyNullableRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional().nullable(),
}).strict());

export const JobOfferOrderByWithAggregationInputSchema: z.ZodType<Prisma.JobOfferOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => JobOfferCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => JobOfferAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JobOfferMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JobOfferMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => JobOfferSumOrderByAggregateInputSchema).optional()
}).strict();

export const JobOfferScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JobOfferScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema),z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema),z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  salary_from: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  salary_to: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  is_active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  salary_currency: z.union([ z.lazy(() => EnumCurrencyWithAggregatesFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompanyCreateInputSchema: z.ZodType<Prisma.CompanyCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  job_offers: z.lazy(() => JobOfferCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  job_offers: z.lazy(() => JobOfferUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUpdateInputSchema: z.ZodType<Prisma.CompanyUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  job_offers: z.lazy(() => JobOfferUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  job_offers: z.lazy(() => JobOfferUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyCreateManyInputSchema: z.ZodType<Prisma.CompanyCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string()
}).strict();

export const CompanyUpdateManyMutationInputSchema: z.ZodType<Prisma.CompanyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferCreateInputSchema: z.ZodType<Prisma.JobOfferCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean().optional(),
  salary_currency: z.lazy(() => CurrencySchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  Company: z.lazy(() => CompanyCreateNestedOneWithoutJob_offersInputSchema).optional()
}).strict();

export const JobOfferUncheckedCreateInputSchema: z.ZodType<Prisma.JobOfferUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean().optional(),
  salary_currency: z.lazy(() => CurrencySchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  companyId: z.string().optional().nullable()
}).strict();

export const JobOfferUpdateInputSchema: z.ZodType<Prisma.JobOfferUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Company: z.lazy(() => CompanyUpdateOneWithoutJob_offersNestedInputSchema).optional()
}).strict();

export const JobOfferUncheckedUpdateInputSchema: z.ZodType<Prisma.JobOfferUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const JobOfferCreateManyInputSchema: z.ZodType<Prisma.JobOfferCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean().optional(),
  salary_currency: z.lazy(() => CurrencySchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  companyId: z.string().optional().nullable()
}).strict();

export const JobOfferUpdateManyMutationInputSchema: z.ZodType<Prisma.JobOfferUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JobOfferUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const JobOfferListRelationFilterSchema: z.ZodType<Prisma.JobOfferListRelationFilter> = z.object({
  every: z.lazy(() => JobOfferWhereInputSchema).optional(),
  some: z.lazy(() => JobOfferWhereInputSchema).optional(),
  none: z.lazy(() => JobOfferWhereInputSchema).optional()
}).strict();

export const JobOfferOrderByRelationAggregateInputSchema: z.ZodType<Prisma.JobOfferOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const EnumCurrencyFilterSchema: z.ZodType<Prisma.EnumCurrencyFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const CompanyNullableRelationFilterSchema: z.ZodType<Prisma.CompanyNullableRelationFilter> = z.object({
  is: z.lazy(() => CompanyWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CompanyWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const JobOfferCountOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferAvgOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferAvgOrderByAggregateInput> = z.object({
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferMinOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferSumOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferSumOrderByAggregateInput> = z.object({
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const EnumCurrencyWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCurrencyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCurrencyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCurrencyFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const JobOfferCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => JobOfferCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateWithoutCompanyInputSchema).array(),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobOfferCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JobOfferUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => JobOfferCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateWithoutCompanyInputSchema).array(),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobOfferCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const JobOfferUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.JobOfferUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobOfferCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateWithoutCompanyInputSchema).array(),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => JobOfferUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => JobOfferUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobOfferCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => JobOfferUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => JobOfferUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => JobOfferUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => JobOfferUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => JobOfferScalarWhereInputSchema),z.lazy(() => JobOfferScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const JobOfferUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.JobOfferUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobOfferCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateWithoutCompanyInputSchema).array(),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => JobOfferCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => JobOfferUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => JobOfferUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobOfferCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => JobOfferWhereUniqueInputSchema),z.lazy(() => JobOfferWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => JobOfferUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => JobOfferUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => JobOfferUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => JobOfferUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => JobOfferScalarWhereInputSchema),z.lazy(() => JobOfferScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutJob_offersInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutJob_offersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutJob_offersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutJob_offersInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const EnumCurrencyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCurrencyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CurrencySchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const CompanyUpdateOneWithoutJob_offersNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneWithoutJob_offersNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutJob_offersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutJob_offersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutJob_offersInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutJob_offersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutJob_offersInputSchema),z.lazy(() => CompanyUpdateWithoutJob_offersInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutJob_offersInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCurrencyFilterSchema: z.ZodType<Prisma.NestedEnumCurrencyFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedEnumCurrencyWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCurrencyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCurrencyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCurrencyFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const JobOfferCreateWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferCreateWithoutCompanyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean().optional(),
  salary_currency: z.lazy(() => CurrencySchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const JobOfferUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean().optional(),
  salary_currency: z.lazy(() => CurrencySchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const JobOfferCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => JobOfferWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JobOfferCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const JobOfferCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.JobOfferCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => JobOfferCreateManyCompanyInputSchema),z.lazy(() => JobOfferCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const JobOfferUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => JobOfferWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => JobOfferUpdateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => JobOfferCreateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const JobOfferUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => JobOfferWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => JobOfferUpdateWithoutCompanyInputSchema),z.lazy(() => JobOfferUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const JobOfferUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => JobOfferScalarWhereInputSchema),
  data: z.union([ z.lazy(() => JobOfferUpdateManyMutationInputSchema),z.lazy(() => JobOfferUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict();

export const JobOfferScalarWhereInputSchema: z.ZodType<Prisma.JobOfferScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JobOfferScalarWhereInputSchema),z.lazy(() => JobOfferScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobOfferScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobOfferScalarWhereInputSchema),z.lazy(() => JobOfferScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salary_from: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  salary_to: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  is_active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  salary_currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompanyCreateWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyCreateWithoutJob_offersInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string()
}).strict();

export const CompanyUncheckedCreateWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutJob_offersInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string()
}).strict();

export const CompanyCreateOrConnectWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutJob_offersInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutJob_offersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutJob_offersInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutJob_offersInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutJob_offersInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutJob_offersInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutJob_offersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutJob_offersInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const CompanyUpdateToOneWithWhereWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutJob_offersInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutJob_offersInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutJob_offersInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutJob_offersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyUncheckedUpdateWithoutJob_offersInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutJob_offersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferCreateManyCompanyInputSchema: z.ZodType<Prisma.JobOfferCreateManyCompanyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean().optional(),
  salary_currency: z.lazy(() => CurrencySchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const JobOfferUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferUncheckedUpdateManyWithoutCompanyInputSchema: z.ZodType<Prisma.JobOfferUncheckedUpdateManyWithoutCompanyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const CompanyFindFirstArgsSchema: z.ZodType<Prisma.CompanyFindFirstArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyScalarFieldEnumSchema,CompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindFirstOrThrowArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyScalarFieldEnumSchema,CompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyFindManyArgsSchema: z.ZodType<Prisma.CompanyFindManyArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyScalarFieldEnumSchema,CompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyAggregateArgsSchema: z.ZodType<Prisma.CompanyAggregateArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompanyGroupByArgsSchema: z.ZodType<Prisma.CompanyGroupByArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithAggregationInputSchema.array(),CompanyOrderByWithAggregationInputSchema ]).optional(),
  by: CompanyScalarFieldEnumSchema.array(),
  having: CompanyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompanyFindUniqueArgsSchema: z.ZodType<Prisma.CompanyFindUniqueArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const CompanyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindUniqueOrThrowArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const JobOfferFindFirstArgsSchema: z.ZodType<Prisma.JobOfferFindFirstArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobOfferScalarFieldEnumSchema,JobOfferScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobOfferFindFirstOrThrowArgsSchema: z.ZodType<Prisma.JobOfferFindFirstOrThrowArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobOfferScalarFieldEnumSchema,JobOfferScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobOfferFindManyArgsSchema: z.ZodType<Prisma.JobOfferFindManyArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobOfferScalarFieldEnumSchema,JobOfferScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobOfferAggregateArgsSchema: z.ZodType<Prisma.JobOfferAggregateArgs> = z.object({
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobOfferGroupByArgsSchema: z.ZodType<Prisma.JobOfferGroupByArgs> = z.object({
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithAggregationInputSchema.array(),JobOfferOrderByWithAggregationInputSchema ]).optional(),
  by: JobOfferScalarFieldEnumSchema.array(),
  having: JobOfferScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobOfferFindUniqueArgsSchema: z.ZodType<Prisma.JobOfferFindUniqueArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const JobOfferFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.JobOfferFindUniqueOrThrowArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const CompanyCreateArgsSchema: z.ZodType<Prisma.CompanyCreateArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  data: z.union([ CompanyCreateInputSchema,CompanyUncheckedCreateInputSchema ]),
}).strict() ;

export const CompanyUpsertArgsSchema: z.ZodType<Prisma.CompanyUpsertArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
  create: z.union([ CompanyCreateInputSchema,CompanyUncheckedCreateInputSchema ]),
  update: z.union([ CompanyUpdateInputSchema,CompanyUncheckedUpdateInputSchema ]),
}).strict() ;

export const CompanyCreateManyArgsSchema: z.ZodType<Prisma.CompanyCreateManyArgs> = z.object({
  data: z.union([ CompanyCreateManyInputSchema,CompanyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CompanyDeleteArgsSchema: z.ZodType<Prisma.CompanyDeleteArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const CompanyUpdateArgsSchema: z.ZodType<Prisma.CompanyUpdateArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  data: z.union([ CompanyUpdateInputSchema,CompanyUncheckedUpdateInputSchema ]),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const CompanyUpdateManyArgsSchema: z.ZodType<Prisma.CompanyUpdateManyArgs> = z.object({
  data: z.union([ CompanyUpdateManyMutationInputSchema,CompanyUncheckedUpdateManyInputSchema ]),
  where: CompanyWhereInputSchema.optional(),
}).strict() ;

export const CompanyDeleteManyArgsSchema: z.ZodType<Prisma.CompanyDeleteManyArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
}).strict() ;

export const JobOfferCreateArgsSchema: z.ZodType<Prisma.JobOfferCreateArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  data: z.union([ JobOfferCreateInputSchema,JobOfferUncheckedCreateInputSchema ]),
}).strict() ;

export const JobOfferUpsertArgsSchema: z.ZodType<Prisma.JobOfferUpsertArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
  create: z.union([ JobOfferCreateInputSchema,JobOfferUncheckedCreateInputSchema ]),
  update: z.union([ JobOfferUpdateInputSchema,JobOfferUncheckedUpdateInputSchema ]),
}).strict() ;

export const JobOfferCreateManyArgsSchema: z.ZodType<Prisma.JobOfferCreateManyArgs> = z.object({
  data: z.union([ JobOfferCreateManyInputSchema,JobOfferCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const JobOfferDeleteArgsSchema: z.ZodType<Prisma.JobOfferDeleteArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const JobOfferUpdateArgsSchema: z.ZodType<Prisma.JobOfferUpdateArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  include: JobOfferIncludeSchema.optional(),
  data: z.union([ JobOfferUpdateInputSchema,JobOfferUncheckedUpdateInputSchema ]),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const JobOfferUpdateManyArgsSchema: z.ZodType<Prisma.JobOfferUpdateManyArgs> = z.object({
  data: z.union([ JobOfferUpdateManyMutationInputSchema,JobOfferUncheckedUpdateManyInputSchema ]),
  where: JobOfferWhereInputSchema.optional(),
}).strict() ;

export const JobOfferDeleteManyArgsSchema: z.ZodType<Prisma.JobOfferDeleteManyArgs> = z.object({
  where: JobOfferWhereInputSchema.optional(),
}).strict() ;