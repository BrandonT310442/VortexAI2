import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type ControlnetBodyParam = FromSchema<typeof schemas.Controlnet.body>;
export type ControlnetResponse200 = FromSchema<typeof schemas.Controlnet.response['200']>;
export type FacerestoreBodyParam = FromSchema<typeof schemas.Facerestore.body>;
export type FacerestoreResponse200 = FromSchema<typeof schemas.Facerestore.response['200']>;
export type FaceswapBodyParam = FromSchema<typeof schemas.Faceswap.body>;
export type FaceswapResponse200 = FromSchema<typeof schemas.Faceswap.response['200']>;
export type GenerateBodyParam = FromSchema<typeof schemas.Generate.body>;
export type GenerateResponse200 = FromSchema<typeof schemas.Generate.response['200']>;
export type GetJobMetadataParam = FromSchema<typeof schemas.GetJob.metadata>;
export type GetJobResponse200 = FromSchema<typeof schemas.GetJob.response['200']>;
export type InpaintingBodyParam = FromSchema<typeof schemas.Inpainting.body>;
export type InpaintingResponse200 = FromSchema<typeof schemas.Inpainting.response['200']>;
export type ListEmbeddingsResponse200 = FromSchema<typeof schemas.ListEmbeddings.response['200']>;
export type ListLorasResponse200 = FromSchema<typeof schemas.ListLoras.response['200']>;
export type ListModelsResponse200 = FromSchema<typeof schemas.ListModels.response['200']>;
export type ListSamplersResponse200 = FromSchema<typeof schemas.ListSamplers.response['200']>;
export type ListSdxlEmbeddingsResponse200 = FromSchema<typeof schemas.ListSdxlEmbeddings.response['200']>;
export type ListSdxlLorasResponse200 = FromSchema<typeof schemas.ListSdxlLoras.response['200']>;
export type ListSdxlModelsResponse200 = FromSchema<typeof schemas.ListSdxlModels.response['200']>;
export type ListSdxlSamplersResponse200 = FromSchema<typeof schemas.ListSdxlSamplers.response['200']>;
export type PhotomakerBodyParam = FromSchema<typeof schemas.Photomaker.body>;
export type PhotomakerResponse200 = FromSchema<typeof schemas.Photomaker.response['200']>;
export type SdxlGenerateBodyParam = FromSchema<typeof schemas.SdxlGenerate.body>;
export type SdxlGenerateResponse200 = FromSchema<typeof schemas.SdxlGenerate.response['200']>;
export type SdxlInpaintingBodyParam = FromSchema<typeof schemas.SdxlInpainting.body>;
export type SdxlInpaintingResponse200 = FromSchema<typeof schemas.SdxlInpainting.response['200']>;
export type SdxlTransformBodyParam = FromSchema<typeof schemas.SdxlTransform.body>;
export type SdxlTransformResponse200 = FromSchema<typeof schemas.SdxlTransform.response['200']>;
export type TransformBodyParam = FromSchema<typeof schemas.Transform.body>;
export type TransformResponse200 = FromSchema<typeof schemas.Transform.response['200']>;
export type UpscaleBodyParam = FromSchema<typeof schemas.Upscale.body>;
export type UpscaleResponse200 = FromSchema<typeof schemas.Upscale.response['200']>;
