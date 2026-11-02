import { test, expect } from '@playwright/test';
import axe from 'axe-core';

const ids = ['about','experience','education','skills','projects','contact'] as const;
const labels = ['About','Experience','Education','Skills','Projects','Contact'];
const values = ['Computer Science graduate','Neurofive Solutions','Iqra University','Frontend development','SignalCV','jediahdsouza4@gmail.com'];
for (const [width,height] of [[320,844],[390,844],[768,1024],[844,390],[1440,900],[1920,1080]]) {
  test(`responsive overview ${width}x${height}`, async ({ page }) => {
    await page.setViewportSize({width,height}); await page.goto('/'); await page.waitForSelector('html.js');
    await expect(page.locator('.region')).toHaveCount(6);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    if (width <= 820 || height <= 560) for (const button of await page.locator('.mobile-controls button').all()) { const box = await button.boundingBox(); expect(box!.width).toBeGreaterThanOrEqual(44); expect(box!.height).toBeGreaterThanOrEqual(44); }
  });
}
test('each region opens complete sheet; navigation wraps and history works', async ({page}) => {
  await page.goto('/');
  for (let i=0; i<ids.length; i++) {
    await page.locator(`.region-${ids[i]}`).click();
    await expect(page.getByRole('dialog')).toContainText(values[i]);
    await expect(page).toHaveURL(new RegExp(`#${ids[i]}$`));
    await page.getByRole('button',{name:'← Back to plan'}).click(); await expect(page.getByRole('dialog')).toHaveCount(0);
  }
  await page.locator('.region-about').click(); await page.getByRole('button',{name:'← Previous'}).click();
  await expect(page.locator('#sheet-title')).toContainText('Contact'); await page.getByRole('button',{name:'Next →'}).click();
  await expect(page.locator('#sheet-title')).toContainText('About'); await page.goBack(); await expect(page.locator('#sheet-title')).toContainText('Contact');
});
test('modal focus containment, Escape and restoration', async ({page}) => {
  await page.goto('/'); const trigger=page.locator('.region-about'); await trigger.focus(); await page.keyboard.press('Enter');
  const close=page.getByRole('button',{name:'← Back to plan'}); await expect(close).toBeFocused();
  await page.keyboard.press('Shift+Tab'); await expect(page.getByRole('button',{name:'Next →'})).toBeFocused();
  await page.keyboard.press('Tab'); await expect(close).toBeFocused(); await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0); await expect(trigger).toBeFocused();
});
test('deep link, arrow keys and browser back', async ({page}) => {
  await page.goto('/#skills'); await expect(page.locator('#sheet-title')).toContainText('Skills');
  await page.keyboard.press('ArrowRight'); await expect(page.locator('#sheet-title')).toContainText('Projects');
  await page.goBack(); await expect(page.locator('#sheet-title')).toContainText('Skills');
});
test('touch navigation, pan and zoom', async ({browser}) => {
  const ctx=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true}); const page=await ctx.newPage(); await page.goto('/');
  for (let i=0;i<ids.length;i++){const button=page.locator('.mobile-controls button').nth(i);await button.tap();await expect(page.locator('#sheet-title')).toContainText(labels[i]);await page.getByRole('button',{name:'← Back to plan'}).tap();await expect(page.getByRole('dialog')).toHaveCount(0);}
  const plan=page.locator('.plan-position'); const before=await plan.evaluate(el=>getComputedStyle(el).transform); await page.getByRole('button',{name:'Pan right'}).tap(); await page.waitForTimeout(800); expect(await plan.evaluate(el=>getComputedStyle(el).transform)).not.toBe(before);
  await page.locator('#zoom').fill('1.5'); await expect(page.getByText('Zoom 1.5×')).toBeVisible(); await page.getByRole('button',{name:'Reset'}).tap(); await expect(page.getByText('Zoom 1.0×')).toBeVisible(); await ctx.close();
});
test('reduced motion never lifts, moves or scales the plan', async ({page}) => {
  await page.emulateMedia({reducedMotion:'reduce'}); await page.goto('/'); const plan=page.locator('.plan'); const button=page.locator('.region-about'); const slab=button.locator('.slab');
  const before=await plan.evaluate(el=>getComputedStyle(el).transform), regionBefore=await slab.evaluate(el=>getComputedStyle(el).transform);
  await button.focus(); expect(await slab.evaluate(el=>getComputedStyle(el).transform)).toBe(regionBefore); await page.keyboard.press('Enter');
  expect(await plan.evaluate(el=>getComputedStyle(el).transform)).toBe(before); expect(await slab.evaluate(el=>getComputedStyle(el).transform)).toBe(regionBefore);
  await expect(page.locator('.sheet')).toHaveCSS('animation-name','none');
});
test('CSS unsupported fallback and no-JS content', async ({browser}) => {
  const ctx=await browser.newContext(); const page=await ctx.newPage(); await page.addInitScript(()=>{const original=CSS.supports.bind(CSS); CSS.supports=((p:string,v?:string)=>p==='transform-style'?false:original(p,v||'')) as typeof CSS.supports}); await page.goto('/');
  await expect(page.locator('.fallback')).toBeVisible(); await page.locator('.fallback').getByRole('button',{name:/About/}).click(); await expect(page.locator('#sheet-title')).toContainText('About'); await ctx.close();
  const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const p=await nojs.newPage();await p.goto('/'); for(let i=0;i<ids.length;i++) await expect(p.locator(`#${ids[i]}`)).toContainText(values[i]);await p.getByRole('link',{name:'Projects',exact:true}).click();await expect(p).toHaveURL(/#projects$/);await nojs.close();
});
for (const width of [390,1440]) for (const id of ids) test(`axe: ${id} sheet at ${width}`, async ({page}) => {
  await page.setViewportSize({width,height:844}); await page.goto('/'); await page.locator(`.region-${id}`).evaluate((el:HTMLElement)=>el.click()); await page.locator('.sheet').evaluate(async el=>{await Promise.all(el.getAnimations().map(a=>a.finished))});
  await page.evaluate(axe.source); const violations=await page.evaluate(async()=> (await (window as unknown as {axe:typeof axe}).axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}})).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))); expect(violations).toEqual([]);
});
test('long project content remains scrollable and controls remain visible',async({page})=>{await page.setViewportSize({width:390,height:844});await page.goto('/#projects');await page.getByRole('dialog').getByRole('heading',{name:'Secure Enterprise Network Design'}).scrollIntoViewIfNeeded();await expect(page.getByRole('button',{name:'← Back to plan'})).toBeInViewport();await expect(page.getByRole('button',{name:'Next →'})).toBeInViewport();await expect(page.getByRole('dialog')).toContainText('deterministic mock services');});
test('hover lifts the visual slab without moving the hit area',async({page})=>{await page.setViewportSize({width:1440,height:900});await page.goto('/');await page.waitForSelector('html.js');const region=page.locator('.region-about'),slab=region.locator('.slab');const base=await slab.evaluate(el=>getComputedStyle(el).transform);await region.hover();await page.waitForTimeout(350);expect(await slab.evaluate(el=>getComputedStyle(el).transform)).not.toBe(base);await expect(region.locator('.hologram')).toHaveCSS('opacity','1');await region.click();await expect(page.locator('#sheet-title')).toContainText('About');});
for(const state of ['overview','fallback']) test(`axe: ${state}`,async({page})=>{await page.goto('/');await page.waitForSelector('html.js');if(state==='fallback')await page.getByRole('button',{name:'Simplified plan'}).click();await page.evaluate(axe.source);const violations=await page.evaluate(async()=>(await (window as unknown as {axe:typeof axe}).axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}})).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})));expect(violations).toEqual([])});
test('tap a projected region and drag the blank stage',async({browser})=>{const context=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});const page=await context.newPage();await page.goto('/');await page.waitForSelector('html.js');await page.locator('.region-about').tap();await expect(page.locator('#sheet-title')).toContainText('About');await page.getByRole('button',{name:'← Back to plan'}).tap();await expect(page.getByRole('dialog')).toHaveCount(0);const scene=page.locator('.plan-position');const before=await scene.evaluate(el=>getComputedStyle(el).transform);const cdp=await context.newCDPSession(page);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:150,y:250}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:190,y:280}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForTimeout(800);expect(await scene.evaluate(el=>getComputedStyle(el).transform)).not.toBe(before);await context.close()});
test('desktop board is fully framed at the review viewport',async({page})=>{await page.setViewportSize({width:1440,height:900});await page.goto('/');await page.waitForSelector('html.js');const box=await page.locator('.plan').boundingBox();expect(box!.x).toBeGreaterThanOrEqual(0);expect(box!.y).toBeGreaterThanOrEqual(0);expect(box!.x+box!.width).toBeLessThanOrEqual(1440);expect(box!.y+box!.height).toBeLessThanOrEqual(900)});

test("browser back closes the sheet and restores opener focus",async({page})=>{await page.goto("/");await page.waitForSelector("html.js");const opener=page.locator(".region-about");await opener.focus();await page.keyboard.press("Enter");await expect(page.locator("#sheet-title")).toContainText("About");await page.goBack();await expect(page.locator("dialog")).toHaveCount(0);await expect(opener).toBeFocused();});

test("the original introductory statement remains visible in text view",async({page})=>{await page.goto("/");await expect(page.locator(".document-heading")).toContainText("I build responsive, user-focused web applications with React, JavaScript, and TypeScript.")});
