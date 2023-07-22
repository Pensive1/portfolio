'use-client';
//Import icon svgs

export default function Icon (iconType:string|null = null, size:number|null = null) {
    {/* 
        1. The size prop programatically changes the icon size in elements.
            1.1 If a size isn't specified, the default is regular
        2. Size... 1 = x-small, 2 = regular 3 = medium
    */}
    
    {/* 
        3.Switch statement that returns an icon type (category icon)
            3.1 icons are filled with global css (via Tailwind)
    */}
    return "icon";
}