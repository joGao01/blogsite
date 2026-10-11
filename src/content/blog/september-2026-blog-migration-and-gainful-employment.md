---
layout: blog
title: "September 2026: Blog Migration and Gainful Employment"
description: "In which I migrate my blog because blogspot's text editor was
  pissing me off. Also: I have a job now."
pubDate: 2026-10-11T11:10:00.000-04:00
heroImage: /images/blog/e46.webp
---
## I moved my blog

At the beginning of September, I started migrating my blog off Blogspot. With its inconsistent spacing between paragraphs and photos, the Blogspot editor had pissed me off one too many times. I landed on a custom Astro + Decap CMS solution where I could write posts in markdown that would be reliably rendered into HTML by Astro, eliminating the need to fight antiquated text editors.

The site itself is a work in progress, but it has been working well so far. The [source code](https://github.com/joGao01/blogsite) is available to view on my GitHub. (If you see any bugs, feel free to open an issue.)

![picture of my github repository](/images/blog/screenshot-2026-10-04-205828.webp)

My Codex subscription, which I had bought in order to pose as an AI-user for a few interviews, was a huge help in setting up the Astro framework boilerplate and hooking up Decap CMS. 

After the initial setup, I curtailed my usage of it. It's uncomfortable how much understanding you can potentially surrender just by having it build your entire website for you. This blog is for myself, and I have no reason to optimize for efficiency in its construction.

## I have a job now

After months of doing increasingly [obscure leetcode questions](https://leetcode.com/problems/koko-eating-bananas/), learning common system design questions front-to-back, and suffering the various humiliation rituals of 2026 software engineering interviews, I finally received an offer for a job that, anticlimactically, involved the least painful hiring process I had ever experienced.

The timeline is as follows:

* **August 10**: I apply for a developer position on Indeed for a company that showed up as “Fast Growing Startup” on the listing
* **August 24**: I receive a message on Indeed from the SVP saying that he wanted to set up a Zoom call to talk about the role
* **August 27**: The initial call goes well, and I am pleased to learn that not only is the company real, but that it also has a name and an office in the garment district.
* **September 11**: I arrive at the office 45 minutes late for an in-person technical interview because of signal problems. Anyone will tell you that this is a professional death sentence, but the SVP is really nice about it. The interview, which asks me to write a few new Java Springboot endpoints, goes smoothly, and they seem satisfied with my code quality and usage of SQL joins.
* **September 14**: I receive a verbal offer in my email
* **September 15**: I receive and sign the offer
* **September 21**: I start my job and my 2026 unemployment era comes to an end

![indeed notification that reads "You’re hired by Fast Growing Startup."](/images/blog/screenshot-2026-10-04-201514.webp)

It was about a month and a half from application to start date, which some would consider a miracle in this job market. It is also not lost on me that I used almost nothing of what I had spent months studying and learning to pass this interview. The only thing I had done to prepare for it was to familiarize myself with ChatGPT and practice SQL joins the morning of. 

I have long resigned myself to the fact that the universe loves playing silly little tricks on me. That said, I am better off for knowing practical applications of Redis and Kafka regardless.

Work has been going well. I took down the shared development environment on my third day which is a new record for me, but nobody got mad at me.

### Museum of Failures

* During a hiring manager round, I was asked to design Instagram in 20 minutes. The recruiter had not mentioned that the interview included a system design portion, so I was completely blindsided. Needless to say, it did not go well.

![](/images/blog/screenshot-2026-10-04-210342.webp)

* I was asked to take a 3-hour skills assessment for which I had to download HonorLock and use Google Chrome. I felt like I was being hazed, and they also did not think I did well enough.

![](/images/blog/screenshot-2026-10-04-210802.webp)

* I experienced a 5-hour interview loop where the interviews were scheduled back-to-back. A harrowing process for both interviewees and interviewers alike I'm sure, because across the five interviews, I learned that the interviewers themselves were also sitting in the same zoom call for five hours waiting for candidates to drop in. Despite feeling that I did fine, I received my rejection on a Saturday night.

![](/images/blog/screenshot-2026-10-04-210939.webp)

* During a different hiring manager round, I was asked to open up a notepad, share my screen, and write a simple Java implementation. I hadn't written Java in over several months at this point, so I thought I was cooked. A week and a half later, I received an invitation at 3am to schedule my next round of interviews.
* A job listing that explicitly stated that the position was based in NYC responded to my application to ask if I would be open to relocating to DC because they were not hiring for software engineers in NYC. Also the job was for a surveillance data aggregation company. Yuck.

![](/images/blog/75c2404224ceec5388a151444f04abad.webp)

## Lessons for SWE job seekers

### LinkedIn is super giga cooked. Do not use it except to respond to recruiters

Of all the jobs I applied to, not one response came back from a job I applied to via LinkedIn. Referrals are a golden ticket, but as far as cold applications go, I achieved the best rates of response from [Welcome To the Jungle](https://app.welcometothejungle.com/), followed by [Hiring Cafe](https://hiringcafe.com/). 

Only one company responded to me on Indeed, and it was the one that hired me, so I honestly feel like I just got lucky there.

Note: Welcome to the Jungle has different websites for US and EU, so make sure you're signing up on the US one if you're based in the US like me.

### [Neetcode](https://www.youtube.com/@NeetCode) is still goated for leetcode prep

We can debate at length whether leetcode-style interviews are a meaningful way to measure software engineering competence in 2026, but as long as companies still do them, Neetcode is the go to resource for problem breakdowns. 

Plus, he makes motivational videos

![Youtube video titled "Maybe some people should just give up"](/images/blog/screenshot-2026-10-11-111823.webp)

### [HelloInterview](https://www.hellointerview.com/) is goated for System Design Prep

![](/images/blog/screenshot-2026-10-11-111638.webp)

Mid-level and Senior-level software engineers are typically expected to complete at least one system design round. HelloInterview is one of the best resources because not only do they provide comprehensive write-ups for common questions, they also provide a solid framework on how to structure your response to the interviewer and the difference in expectations for mid-level vs senior vs staff engineers. 

They also make pretty good deep dives for must-know concepts like database sharding and partitioning, and common technologies, like Kafka and Redis. Some of their stuff is pay-walled, but the free stuff is more than enough in my opinion.

### Startup interviews are a complete crapshoot

There’s no formulaic way to prepare for startup interviews. You just go in and pray they don’t ask you to write a bash script from memory. 

![](/images/blog/screenshot_20260828-111014.webp)
