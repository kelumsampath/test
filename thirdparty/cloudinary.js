// apikey 441889556151132
// api secrete e9hIrL_FSwbbQDYVOtYpsK_d0IU
// env cloudinary://441889556151132:e9hIrL_FSwbbQDYVOtYpsK_d0IU@university-of-moratuwa/
// cloudinary.image("sample", {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});

const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'university-of-moratuwa', 
    api_key: '441889556151132', 
    api_secret: 'e9hIrL_FSwbbQDYVOtYpsK_d0IU' 
  });

module.exports.defaultuser=(callback)=>{
    const filepath='assets/defualt.jpg'
    cloudinary.uploader.upload(filepath,function(err,result) {
        //console.log(result);
        if(err){
            callback(err);
        }else{
            var data={
                public_id:result.public_id,
                url:result.url
            }
            callback(null,data)
        }
    })
}