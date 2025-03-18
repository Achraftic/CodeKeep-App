import React from 'react';

const Color = () => {
    return (
        <div className="color-test-container grid grid-cols-5 gap-6">
       
        <div className="color-box bg-background">Background</div>
        <div className="color-box bg-card">Card</div>
        <div className="color-box bg-popover">Popover</div>
        <div className="color-box bg-sidebar">Sidebar</div>
        <div className="color-box bg-input">input</div>
      
        
        <div className="color-box text-foreground">Foreground</div>
        <div className="color-box text-card-foreground">Card Foreground</div>
        <div className="color-box text-popover-foreground">Popover Foreground</div>
        <div className="color-box text-sidebar-foreground">Sidebar Foreground</div>
      
       
        <div className="color-box bg-primary text-primary-foreground">Primary</div>
        <div className="color-box bg-sidebar-primary text-sidebar-primary-foreground">Sidebar Primary</div>
      
      
        <div className="color-box bg-secondary text-secondary-foreground">Secondary</div>
        <div className="color-box bg-accent text-accent-foreground">Accent</div>
        <div className="color-box bg-muted text-muted-foreground">Muted</div>
      
       
        <div className="color-box bg-destructive text-destructive-foreground">Destructive</div>
      
      
        <div className="color-box border border-border">Border</div>
        <div className="color-box border border-sidebar-border">Sidebar Border</div>
      
       
        <div className="color-box bg-chart-1">Chart 1</div>
        <div className="color-box bg-chart-2">Chart 2</div>
        <div className="color-box bg-chart-3">Chart 3</div>
        <div className="color-box bg-chart-4">Chart 4</div>
        <div className="color-box bg-chart-5">Chart 5</div>
      
      
        <div className="color-box ring ring-ring">Ring</div>
        <div className="color-box ring ring-sidebar-ring">Sidebar Ring</div>
      </div>
    );
}

export default Color;
