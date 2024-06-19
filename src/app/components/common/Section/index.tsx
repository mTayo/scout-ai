
export default function Section({children, contentClass="py-5 md:py-12", useContentBorder= true, useContentMaxWidth=true, useTopHorizontalBorder= true}: any) {
    return (
          <div className="relative">
              <div className={`horizontal-border ${useTopHorizontalBorder? '': 'horizontal-border-top-zero'}`}>
                  <div className="container-max-width mx-auto relative">
                      <div className={` ${useContentMaxWidth? 'content-max-width mx-auto' : ''} overflow-x-hidden `}>
                      <div className={`${ useContentBorder? 'content-border': ''} ${contentClass}`}> {children} </div>
                      </div>
                  </div>
              </div>
  
          </div>
    );
  }
  