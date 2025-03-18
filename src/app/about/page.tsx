/* eslint-disable react/no-unescaped-entities */
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code2, Sparkles, Users, Zap } from "lucide-react"
import { GoTools } from "react-icons/go"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">
          About CodeVault
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Your <span className="text-primary">Code Companion</span> for the Modern Developer
        </h1>
        <p className="text-foreground/70 text-lg max-w-3xl mb-8">
          We built CodeVault with a simple mission: to create the most intuitive, powerful platform for developers to store, organize, and share their code snippets.
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center">
          <Card className="w-full md:w-64 border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 ">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <p className="font-semibold text-lg mb-1">15,000+</p>
              <p className="text-foreground/60 text-sm">Active Users</p>
            </CardContent>
          </Card>
          
          <Card className="w-full md:w-64 border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <p className="font-semibold text-lg mb-1">500,000+</p>
              <p className="text-foreground/60 text-sm">Code Snippets Saved</p>
            </CardContent>
          </Card>
          
          <Card className="w-full md:w-64 border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <p className="font-semibold text-lg mb-1">40+</p>
              <p className="text-foreground/60 text-sm">Languages Supported</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                CodeVault began in 2022 when a team of developers found themselves constantly searching through old projects, messages, and notes to find useful code snippets they'd written before.
              </p>
              <p>
                We realized there had to be a better way. While there were many code storage solutions available, none combined the simplicity, power, and developer-focused features we needed.
              </p>
              <p>
                So we built CodeVault — a platform designed by developers, for developers. Our goal was to create a tool we'd love to use ourselves, with seamless organization, powerful search, and a clean interface that doesn't get in your way.
              </p>
              <p>
                Today, CodeVault serves thousands of developers worldwide, from individual programmers to enterprise teams. We remain committed to our founding vision: making code management effortless.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gradient-to-tr from-primary/10 to-primary/30 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="relative w-4/5 h-4/5 bg-background rounded-lg shadow-xl overflow-hidden border border-foreground/10">
                <div className="absolute top-0 left-0 right-0 h-8 bg-foreground/5 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                    <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                    <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                  </div>
                </div>
                <div className="pt-8 p-4">
                  <div className="h-4 bg-foreground/10 rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-foreground/10 rounded mb-3 w-1/2"></div>
                  <div className="h-4 bg-primary/20 rounded mb-3 w-5/6"></div>
                  <div className="h-4 bg-foreground/10 rounded mb-3 w-2/3"></div>
                  <div className="h-4 bg-foreground/10 rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-primary/20 rounded mb-3 w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-foreground/10 bg-background shadow-sm">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 inline-block rounded-lg mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developer-First Approach</h3>
              <p className="text-foreground/70">
                Every feature we build starts with the developer experience. We believe tools should adapt to your workflow, not the other way around.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-foreground/10 bg-background shadow-sm">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 inline-block rounded-lg mb-4">
                <GoTools className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Elegant Simplicity</h3>
              <p className="text-foreground/70">
                We believe in powerful functionality wrapped in a simple interface. Everything you need, nothing you don&apos;t.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-foreground/10 bg-background shadow-sm">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 inline-block rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-foreground/70">
                Our roadmap is shaped by our users. We actively listen to feedback and build the features that matter most to our community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet The Team</h2>
        <Tabs defaultValue="leadership" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="leadership" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  role: "Founder & CEO",
                  bio: "Former Google engineer with a passion for developer tools.",
                  avatar: "/api/placeholder/100/100"
                },
                {
                  name: "Sam Chen",
                  role: "CTO",
                  bio: "Full-stack developer with 15 years of experience building scalable web applications.",
                  avatar: "/api/placeholder/100/100"
                },
                {
                  name: "Jamie Taylor",
                  role: "Head of Product",
                  bio: "UX specialist focused on creating intuitive developer experiences.",
                  avatar: "/api/placeholder/100/100"
                }
              ].map((person, index) => (
                <Card key={index} className="border border-foreground/10 overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-4">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                    <p className="text-primary font-medium mb-3">{person.role}</p>
                    <p className="text-foreground/70 text-sm">{person.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="engineering" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Robin Patel",
                  role: "Lead Frontend Engineer",
                  bio: "React specialist with a background in design systems.",
                  avatar: "/api/placeholder/100/100"
                },
                {
                  name: "Jordan Lee",
                  role: "Backend Engineer",
                  bio: "System architect specializing in high-performance databases.",
                  avatar: "/api/placeholder/100/100"
                },
                {
                  name: "Casey Wilson",
                  role: "DevOps Engineer",
                  bio: "Infrastructure expert ensuring CodeVault is always fast and reliable.",
                  avatar: "/api/placeholder/100/100"
                }
              ].map((person, index) => (
                <Card key={index} className="border border-foreground/10 overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-4">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                    <p className="text-primary font-medium mb-3">{person.role}</p>
                    <p className="text-foreground/70 text-sm">{person.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Is CodeVault free to use?",
              a: "CodeVault offers a generous free tier that includes up to 100 snippets, basic organization features, and syntax highlighting. For power users, our Pro plan removes all limits and adds advanced features like team collaboration."
            },
            {
              q: "Can I access my snippets offline?",
              a: "Yes! Our desktop application allows you to sync your snippets for offline access. Changes will automatically sync back to the cloud when you're back online."
            },
            {
              q: "What languages does CodeVault support?",
              a: "We support syntax highlighting for over 40 programming languages including JavaScript, Python, Ruby, Go, Rust, Java, C#, and many more. If there's a language you need that we don't support yet, let us know!"
            },
            {
              q: "Is my code secure?",
              a: "Absolutely. All snippets are encrypted at rest, and we use industry-standard security practices to protect your data. Private snippets are only visible to you or team members you explicitly share them with."
            }
          ].map((faq, index) => (
            <Card key={index} className="border border-foreground/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}