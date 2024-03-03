import { useHookFactory } from '@/hooks/use-hook-factory';
import { createErrorHandler } from '@/utils/create-error-handler';
import { createRouterFactory } from '@/utils/create-router';
import { FieldSchema, mockFakerValue } from '@/services/faker'

const { router, setup } = createRouterFactory('/api');
export { setup as AppSetup };

router.get(
  '/',
  createErrorHandler(async (_, res) => {
    res.send('Hello World!');
  })
)


router.post('/faker', createErrorHandler(async (req, res) => {
  const { useBody, useSuccessResponse } = useHookFactory(req, res)
  const body = useBody<FieldSchema>({})
  const value = mockFakerValue(body)

  useSuccessResponse('get faker data successful', value)
}))
