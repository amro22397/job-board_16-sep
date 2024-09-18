'use client'

import { Button } from '@radix-ui/themes'
import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import { UploadButton } from '@/utils/uploadthing'

const ImageUpload = ({icon, name}: { 
  icon: string, name: string,
}) => {
    const [image, setImage] = useState<string>('');
    const fileInRef = useRef<HTMLInputElement>(null);

    
    
    {/* const ImageUpload = async (e: any) => {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'vxam2hsq');

      const res = await fetch(`https://api.cloudinary.com/v1_1/dqxwmu28k/image/upload`, {
        method: 'POST',
        body: data,
      })
    } 
      */}

      console.log(image)

  return (
    <>
    <div className="bg-gray-100 rounded-md size-24 inline-flex items-center content-center justify-center">
                        {image && (
                          <Image src={image} alt='image' width={1024} height={1024}
                          className='w-auto h-auto max-w-24 max-h-24' />
                        )}

                        {!image && (
                          <i className={`${icon} text-gray-400`}></i>
                        )}
                    </div>

                    <input type="hidden" name={name} value={image} />

                  <div className="flex justify-start items-start mt-2">

                  {/*}  <input type='file'
                    name='file'
                    ref={fileInRef}
                    className='hidden'
                    onChange={ImageUpload}
                    />

                    <Button
                    type='button'
                    onClick={() => fileInRef.current?.click()}
                    variant='soft' >
                      select file
                    </Button> */}
      
                    <UploadButton
                    appearance={{
                      button: {
                        width: '98px',
                        fontSize: '13px',
                        height: '32px',
                      },
                      allowedContent: {
                        display: 'none',
                      }
                    }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImage(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> 


                  </div>
                  
                  
    </>
  )
}

export default ImageUpload
