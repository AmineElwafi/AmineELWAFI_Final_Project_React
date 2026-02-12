import React from 'react'
import blogs from '../../../data/blogs'

export default function Blogs() {
    const truncatecontent = (text, maxLength = 130) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength - 3) + "...";
}
    const truncatetitle = (text, maxLength = 40) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength - 3) + "...";
}

    return (
        <>
            <div className='flex flex-col items-center gap-10 mb-10'>
                <h1 className='font-bold text-4xl'>Our Blog</h1>
                <div className='flex w-[50vw] gap-10'>
                    {blogs.map((blog) => (
                        <div className='flex flex-col gap-3'>
                            <img className='h-100 object-cover' src={blog.img} alt="" />
                            <h3 className='text-xl'>{truncatetitle(blog.title)}</h3>
                            <p className='text-[15px] text-gray-400'>by <span className='text-gray-500 font-bold'>{blog.author}</span> on <span className='text-gray-500 font-bold'>{blog.date}</span></p>
                            <p className='text-gray-400'>{truncatecontent(blog.content)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
