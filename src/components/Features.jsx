import { Box } from '@mantine/core'
import  Bentocard  from './Bentocard'


const Features = () => {
  return (
    <>
    <section className='bg-black pb-52'>
        <Box className='container mx-auto px-3 md:px-10'>
            Feature 1
        </Box>
        <Box className='px-5 py-32 capitalize'>
        <p className='font-face text-lg text-blue-50'>Into the metaverse layer</p>
        </Box>
        <p className='max-w-md font-face text-lg text-blue-50 opacity-50'>Step into a realm where imagination shapes reality.
            Forge alliances, battle foes, and uncover hidden treasures.
            Every choice you make shapes your legend.
            Your journey begins now—are you ready?</p>
        <Box className='border-hsla relative mb-7 h-lvh w-full overflow-hidden rounded-md md:h-[80vh]'>
            <Bentocard />
        </Box>
    </section>
    </>
  )
}

export default Features