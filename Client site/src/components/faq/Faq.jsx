import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import faq from '../../assets/faq.png'
import { motion } from "framer-motion"

const Faq = () => {
    return (
        <div className="px-4 lg:px-[70px] font-roboto">
            <div className="flex flex-col items-center border-b-[2px] border-dashed border-gray-400 pb-5">
                <motion.h1 whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="text-4xl font-bold">FAQ section</motion.h1>
                <motion.p whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="text-lg text-center mt-5 lg:w-[60vw]">In this section we are providing you a opportunity to question us. Here are some answer of some popular question. check it out. if you wnat to question us go to newsletter and subscribe for free </motion.p>
            </div>
            <div className='mt-8 flex flex-col lg:flex-row justify-center '>

                <div className=' lg:w-[50%] shadow-xl border'>
                    <img src={faq} alt="" />
                </div>

                <Accordion allowToggle className=' lg:w-[50%] space-y-10'>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                Can I republish your articles on my website or blog?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        We appreciate your interest in sharing our content. However, republishing our articles requires prior permission. Please reach out to us with details about the article you'd like to republish, and we'll be happy to discuss further
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                Are your articles available for syndication?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Yes, we offer syndication options for select articles. If you're interested in syndicating our content, please contact us to discuss licensing terms and arrangements.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                How can I stay updated on new blog posts?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        To stay informed about our latest articles, you can subscribe to our newsletter or follow us on social media platforms such as Twitter, Facebook, and LinkedIn. Additionally, you can enable browser notifications to receive alerts when new posts are published.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                Do you accept sponsored content or advertisements on your blog?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Yes, we offer opportunities for sponsored content and advertising partnerships. If you're interested in promoting your products, services, or brand through our platform, please get in touch with our advertising team for more information on available options and pricing.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                How can I submit a guest post to your blog?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        We welcome guest contributions! Please visit our "Write for Us" page to learn about our guest posting guidelines and submission process. We're excited to hear from you!
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default Faq;