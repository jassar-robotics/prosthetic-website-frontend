
import DOMPurify from 'dompurify';
import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
function SocialTile({item}) {
  return (
       
    <div className="flex flex-col gap-4">
       <div className="flex md:flex-row flex-col w-full gap-4">
              <div className="w-full flex flex-col gap-4  md:w-2/3">
                  <div id="csr" className="text-xl font-liches  text-left rounded-lg">{item.name}</div>
                  <div className="text-left"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }} />
              </div>
         <ImageSkeleton
                  alt={item?.name}
                  src={item?.image}
                  className="md:w-1/2 w-full object-cover"
                />
       </div>

       <div className="flex flex-wrap items-start">
        {item?.gallery.map((item, index) => (
          <ImageSkeleton 
                  alt={item.id}
                  src={item.image}
                  className="w-full md:w-64 object-cover"
                />
        ))}
       </div>

       </div>

  )
}

export default SocialTile