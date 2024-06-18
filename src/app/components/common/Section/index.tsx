
export default function Section({children, contentClass="py-12", useContentBorder= true, useContentMaxWidth=true}: any) {
    return (
          <div className="relative">
              <div className="horizontal-border">
                  <div className="container-max-width mx-auto relative">
                      <div className={` ${useContentMaxWidth? 'content-max-width mx-auto' : ''} overflow-x-hidden `}>
                      <div className={`${ useContentBorder? 'content-border': ''} ${contentClass}`}> {children} </div>
                      </div>
                  </div>
              </div>
  
          </div>
    );
  }
  