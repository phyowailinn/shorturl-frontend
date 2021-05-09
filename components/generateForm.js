import { useForm } from "react-hook-form";
import HttpCall from "../pages/api/httpcall";

const generateForm = ({ responseData }) => {
  
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  // Submittion for url create
  const onSubmit = async ({ url }) => {
    HttpCall({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/url/generate`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ url }),
    }).then( response => {
        responseData(response.data)
    }).catch( error => {
      if(error?.response) {
        const { errors } = error?.response?.data;
        setError('url', {message: errors.url[0]})
      }
    });
  };
    
  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div id="formurl">
            <input 
                  type="text" 
                  placeholder="Enter the link here" 
                  {...register('url', 
                    { 
                      required: true, 
                      pattern: {
                          value: /^(ftp|http|https):\/\/[^ "]+$/,
                          message: 'Invalid URL'
                      } 
                    })
                  }
                  />
              
              <div id="formbutton">
                <input type="submit" value="Shorten URL" />
              </div>
              <br />
            </div>
            <code style={{color:'red'}}>{errors.url?.message}</code>
      </form>
          
      <p className="boxtextcenter">
        ShortURL.at is a free tool to shorten a URL or reduce a link<br />Use our URL Shortener to create a shortened link making it easy to remember
      </p>
    </>
  );
};

export default generateForm;
