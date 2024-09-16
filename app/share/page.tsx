"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from 'axios'

interface ResourcesProps {
  title: string;
  description: string;
  url: string;
  category: string;
}

export default function Component() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    category: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    // Submit the form data to your API or database
  }

  return (
    <>
      <div className="container mx-auto px-4 pt-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Share a Resource</h1>
        <div className="bg-card text-card-foreground p-6">
          <p className="text-muted-foreground mb-6 text-center">
            Help us grow our collection of web development resources. Your contribution could be featured in our course materials!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto pt-0 p-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Resource Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter the resource title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Briefly describe the resource"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">Resource URL</Label>
            <Input
              id="url"
              name="url"
              type="url"
              placeholder="https://example.com"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData(prevState => ({ ...prevState, category: value }))} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="nodeJS">Node JS</SelectItem>
                <SelectItem value="database">Database</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full">Submit Resource</Button>
      </form>
    </>
  )
}
