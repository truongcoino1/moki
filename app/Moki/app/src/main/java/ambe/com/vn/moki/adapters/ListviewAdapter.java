package ambe.com.vn.moki.adapters;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;

import ambe.com.vn.moki.R;
import ambe.com.vn.moki.model.Model_listview_dlg;

/**
 * Created by HoangNV on 9/17/2017.
 */

public class ListviewAdapter extends BaseAdapter {
    private Context context;
    private ArrayList<Model_listview_dlg> arr;
    public ListviewAdapter(Context context,ArrayList<Model_listview_dlg> arr){
        this.context=context;
        this.arr=arr;
    }
    @Override
    public int getCount() {
        return arr.size();
    }

    @Override
    public Object getItem(int i) {
        return arr.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        View v=view;
        if(v==null){
            LayoutInflater inflater=((Activity)context).getLayoutInflater();
            v=inflater.inflate(R.layout.row_listview,viewGroup,false);
            ViewHolder holder=new ViewHolder();
            holder.tvtitle=(TextView)v.findViewById(R.id.tvtitle);
            holder.tvsubtitle=(TextView)v.findViewById(R.id.tvsubtitle);
            v.setTag(holder);
        }
        ViewHolder holder= (ViewHolder) v.getTag();
        holder.tvtitle.setText(arr.get(i).getTitle());
        holder.tvsubtitle.setText(arr.get(i).getSubTitle());
        return v;
    }
    class ViewHolder{
        TextView tvtitle,tvsubtitle;
    }
}
