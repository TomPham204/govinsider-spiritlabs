import { useState, useEffect } from 'react';
import {
  getArticleById,
  getArticles,
  createArticle,
  updateArticleById,
} from '_@landing-ui/state/mockApi';

export default function TestApi() {
  const [result, setResult] = useState([{}]);
  const [id] = useState('12');

  const logGetArticleById = async () => {
    const data = (await getArticleById(id)).data;
    setResult([data]);
  };

  const logGetArticles = async () => {
    const data = (await getArticles({ limit: 10 })).data;
    setResult(data);
  };

  const createNewArticle = async () => {
    const data = (await createArticle(newArticle)).data;
    setResult([data]);
  };
  const updateArticle = async () => {
    const data = (
      await updateArticleById({
        ...newArticle,
        ID: '30',
        post_title: `UPDATED TITLEEEEE AT ${Date.now()}`,
      })
    ).data;
    setResult([data]);
  };

  useEffect(() => {
    logGetArticleById();
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <button onClick={logGetArticles}>get Articles</button>
      <button onClick={logGetArticleById}>get Article by Id</button>
      <button onClick={createNewArticle}>create new Article</button>
      <button onClick={updateArticle}>update new Article by id</button>
      <div>
        {result.map((article: any, index) => (
          <div
            key={article.ID || index}
            style={{ marginBottom: '30px', borderBottom: '5px solid red' }}
          >
            <p>ID: {article.ID}</p>
            <p>Title: {article.post_title}</p>
            <div dangerouslySetInnerHTML={{ __html: article.post_content }} />
          </div>
        ))}
      </div>
    </div>
  );
}

const newArticle = {
  comment_count: 0,
  comment_status: 'open',
  guid: 'http://govinsider.asia/?page_id=12',
  menu_order: 0,
  ping_status: 'closed',
  pinged: 'TEST CREATING POST',
  post_author: 1,
  post_content:
    '<p style="text-align: left; font-size: 18px; padding-left: 40px;">Hello there, thank you for stopping by. We’re GovInsider, a team of writers, events producers, content marketers and all-round government geeks.\nFor over five years, we have spoken with leaders and change-makers in government, shared their stories with our global audience of 4 million senior civil servants, and put together conferences for public and private sector innovators to discuss the future.</p>\n<p style="text-align: left; font-size: 18px;">We have interviewed prime ministers, ministers, ambassadors, mayors, agency CEOs, tech chiefs and more. Check out this <a href="https://www.forbes.com/sites/joeescobedo/2017/06/08/reaching-government-decision-makers/#935b1932bd96">Forbes</a> interview to learn our secret sauce for working with government.</p>\n<p style="text-align: left; font-size: 18px;">We love bringing good people with good ideas together. That’s why we have partnered with three branches of the United Nations to run summits for innovators around the world to discuss public service delivery in the 21st century. Our events unite the public and private sectors to build relationships, learn from each other, and create solutions.</p>\n<p style="text-align: left; font-size: 18px;">Our flagship summit has been attended by princesses, mayors, ministers, and more than 1,000 senior government officials. We have been named one of the six “key” global events where digital government officials can share their learnings by the Bennett Institute for Public Policy at the University of Cambridge.</p>\n<p style="text-align: center;"><img class="aligncenter wp-image-32475" src="https://govinsider.asia/wp-content/uploads/2020/12/GIL.png" alt="" width="242" height="105" /></p>\n\n<h2 style="text-align: center;"><strong>Innovation Labs World 2017</strong></h2>\n[gallery columns="5" ids="32580,32589,32585,32588,32587,32586,32584,32583,32582,32581"]\n\n&nbsp;\n<h2 style="text-align: center;"><strong>Innovation Labs World 2018</strong></h2>\n[gallery columns="6" ids="32574,32575,32576,32577,32578,32579"]\n<h2 style="text-align: center;"><strong>GovPay | GovNext 2019</strong></h2>\n[gallery columns="5" ids="32566,32567,32568,32572,32573"]\n<p style="text-align: center; font-size: 18px;">Scroll and hover through the timeline below to watch how we\'ve grown through the years.</p>\n<iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1PVjP37rqSdYbjvhMJiAYpQ88bNVMjvHwsZcUMJ9Equ0&amp;font=Lustria-Lato&amp;lang=en&amp;start_at_end=true&amp;timenav_position=top&amp;initial_zoom=1&amp;height=650" width="100%" height="650" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n<h2 style="text-align: center;">VIRTUAL</h2>\n<p style="text-align: left; font-size: 18px;">We started a digital video studio in the midst of a pandemic and ran a full week of online discussions, complete with a <a href="https://www.festival-of-innovation.com/tour">virtual reality tour</a> of Singapore’s iconic Gardens by the Bay. 20,000 viewers tuned in for the livestream to celebrate the successes and resilience of nations in the pandemic, and explore the possibilities in digital identity, sustainability and security by design.</p>\n<p style="text-align: left; font-size: 18px;">That’s not all. We partnered with some of the world’s greatest companies to tackle policy challenges. We’ve worked with global governments to push for climate action. We’ve also danced for the Surabayan mayor at a celebratory dinner after hosting a successful event.</p>\n<p style="text-align: left; font-size: 18px;">We’re passionate about building up the next generation of leaders. We partner with education institutions, including University College London, the Lee Kuan Yew School of Public Policy, and Yale-NUS College, to provide skills and platforms for budding journalists and policy professionals to understand the pressing needs of public service delivery. University College London also named a scholarship programme in our honour.</p>\n<p style="text-align: left; font-size: 18px;">The GovInsider story is always evolving. But for now, we’d love to get to know you better. If you have ideas for working together, do get in touch!</p>\n\n<div class="row">\n\n&nbsp;\n<h3 style="font-size: 18px; text-align: center;"><span style="color: #94409c;">To find out more about partnership opportunities, download the GovInsider Prospectus below:</span></h3>\n&nbsp;\n\n</div>\n<div class="row"><iframe style="border: 0;" src="https://www.clarion-events-group.com/l/339341/2020-02-17/25mjz7r" width="100%" height="600" frameborder="0"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></div>',
  post_content_filtered: '',
  post_date: '2015-07-28 16:10:14',
  post_date_gmt: '2015-07-28 08:10:14',
  post_excerpt: '',
  post_mime_type: '',
  post_modified: '2021-03-15 16:17:48',
  post_modified_gmt: '2021-03-15 08:17:48',
  post_name: 'our-mission',
  post_parent: 0,
  post_password: '',
  post_status: 'publish',
  post_title: 'TEST CREATING POST',
  post_type: 'page',
  to_ping: '',
};
