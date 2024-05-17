use super::{
    block::{BlockComponent, BlockState},
    label::LabelComponent,
};
use crate::parser::types::result::ParseResult;

use web_sys::HtmlTextAreaElement;
use yew::{prelude::*, Component};

pub enum Msg {
    // app config
    Toggle,
    Search,
    // block config
    AddBlock,
    FocusBlock,
    // block state
    UpdateBlock(usize, ParseResult),
    RenameBlock(usize, String),
    // FinishBlock(KeyboardEvent),
}

#[derive(Default, Debug)]
pub struct FrameComponent {
    toggle: bool,
    blocks: Vec<BlockState>,
    focus: usize,
    focus_on_render: bool,
    label_change: bool,
}

#[derive(Properties, PartialEq)]
pub struct FrameProps {
    pub search_mode: bool,
    pub focus_ref: NodeRef,
    pub on_search: Callback<()>,
}

impl FrameComponent {
    fn is_toggled(&self) -> bool {
        self.toggle
    }

    fn last_block(&self) -> usize {
        self.blocks.len() - 1
    }

    fn num_blocks(&self) -> usize {
        self.blocks.len()
    }
}

impl Component for FrameComponent {
    type Message = Msg;
    type Properties = FrameProps;

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            toggle: false,
            blocks: vec![BlockState::from_id(0)],
            focus: 0,
            focus_on_render: true,
            label_change: false,
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::AddBlock => {
                self.blocks.push(BlockState::from_id(self.num_blocks()));
                self.focus = self.last_block();
                self.focus_on_render = true;
            }
            Msg::FocusBlock => {
                self.focus = self.last_block();
                self.focus_on_render = true;
            }
            Msg::Toggle => {
                self.toggle = !self.is_toggled();
                self.focus_on_render = true;
            }
            Msg::UpdateBlock(index, result) => {
                if let Some(block) = self.blocks.get_mut(index) {
                    block.update_result(result);
                }
                self.focus = index;
                self.focus_on_render = false;
                self.label_change = !self.label_change;
            }
            Msg::RenameBlock(index, id) => {
                if let Some(block) = self.blocks.get_mut(index) {
                    block.update_id(id.clone());
                    self.focus_on_render = false;
                    self.label_change = !self.label_change;
                }
            }
            Msg::Search => {
                ctx.props().on_search.emit(());
            }
        };
        true
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let blur = if ctx.props().search_mode {
            "filter: blur(1px);" //"blur-sm"
        } else {
            ""
        };
        html! {
            <div style="min-height: 95vh; display: flex; flex-direction: column;">
            <div style="min-height: 5vh;"/>
                <div class="font-mono text-xs md:text-sm">
                    <div class="w-full flex" style={blur}>
                        // search bar
                        <div class="justify-strart items-end pt-9">
                            <button type="button" onclick={ ctx.link().callback(|_| Msg::Search) }
                                class="hidden h-7 w-1/8 lg:flex items-center text-sm text-gray-400 rounded-md ring-1 ring-gray-900/10 shadow-sm pl-2 pr-3 hover:ring-gray-400 dark:bg-dark-code bg-gray-200 hover:bg-gray-300/60 hover:text-gray-500 dark:highlight-white/5 dark:hover:bg-gray-700 dark:hover:text-gray-300 outline-gray-300 outline-offset-4">
                                <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
                                {"Command reference"}<span class="ml-auto pl-4 pt-0.5 flex-none text-lg font-semibold">{"⌘"}</span><span class="ml-auto pl-1 pt-0.5 flex-none text-xs font-semibold">{"K"}</span>
                            </button>
                        </div>
                        <div class="flex-grow"/>
                        // full evm word (bytes32) checkbox
                        <div class="form-control text-gray-600 dark:text-gray-400 pt-10 pb-3 flex justify-end">
                            <label class="cursor-pointer label">
                            <span>{"Display full EVM words "}</span>
                            <input type="checkbox" checked={self.is_toggled()} class="checkbox checkbox-accent accent-emerald-400 hover:scale-105" onclick={ ctx.link().callback(|_| Msg::Toggle) }/>
                            </label>
                        </div>
                    </div>
                    // code playground
                    <div class="subpixel-antialiased bg-gray-900 dark:bg-dark-code rounded-md shadow-2xl dark:shadow-gray-400/5">
                    {
                        for (0..self.num_blocks()).rev().map(|index| {
                            html! {
                                <div class="flex">
                                    <LabelComponent block_index={index}
                                        input_ref={
                                            if self.focus == index {ctx.props().focus_ref.clone()} else {NodeRef::default()}
                                        }
                                        on_result={ctx.link().callback(move |result: String| {
                                            Msg::RenameBlock(index, result)})
                                        }
                                        on_enter={ ctx.link().callback(move |_| Msg::FocusBlock) }
                                        blur_style={blur}
                                    />
                                    <div class="w-full" style={blur}>
                                    <BlockComponent key={index}
                                        blocks={self.blocks.clone()} block_index={index} toggle={self.is_toggled()} label_change={self.label_change}
                                        on_enter={
                                            // only trigger AddBlock if Enter is pressed on the last block
                                            if index == self.last_block() {
                                                ctx.link().callback(move |_| Msg::AddBlock)
                                            }
                                            // otherwise, move focus back to last block
                                            else { ctx.link().callback(move |_| Msg::FocusBlock) }
                                        }
                                        on_result={ctx.link().callback(move |result| Msg::UpdateBlock(index, result))}
                                        textarea_ref={
                                            if self.focus == index {ctx.props().focus_ref.clone()} else {NodeRef::default()}
                                        }
                                    /></div>
                                </div>
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        }
    }

    fn rendered(&mut self, ctx: &Context<Self>, first_render: bool) {
        gloo_console::log!(
            "(rendered) focus_on_render:",
            &self.focus_on_render.to_string()
        );
        if !first_render && self.focus_on_render && !ctx.props().search_mode {
            if let Some(textarea) = ctx.props().focus_ref.cast::<HtmlTextAreaElement>() {
                let _ = textarea.focus();
            }
        }
    }

    fn changed(&mut self, ctx: &Context<Self>, old_props: &Self::Properties) -> bool {
        gloo_console::log!(
            "(changed) focus_on_render:",
            &self.focus_on_render.to_string(),
            "search_mode:",
            &ctx.props().search_mode.to_string()
        );
        if ctx.props().search_mode != old_props.search_mode {
            match ctx.props().search_mode {
                true => self.focus_on_render = true,
                false => self.focus_on_render = false,
            };
            return true;
        }
        false
    }
}
